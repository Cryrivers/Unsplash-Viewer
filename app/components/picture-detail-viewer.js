import Ember from 'ember';

const {throttle, debounce} = Ember.run;

export default Ember.Component.extend({
  recognizers: 'pan pinch rotate',
  pictureScale: 1,
  pictureAngle: 0,
  pictureX: 0,
  pictureY: 0,
  _updatePan(deltaX, deltaY) {
    const {pictureX, pictureY} = this.getProperties(['pictureX', 'pictureY']);
    if (deltaX) {
      this.set('pictureX', pictureX + deltaX);
    }
    if (deltaY) {
      this.set('pictureY', pictureY + deltaY);
    }
  },
  pan(e) {
    throttle(this,
      this._updatePan,
      e.originalEvent.gesture.deltaX,
      e.originalEvent.gesture.deltaY,
      2
    );
  },
  pinch(e) {
    const {pictureScale} = this.get('pictureScale');
    this.set('pictureScale', pictureScale * e.originalEvent.gesture.scale);
  },
  rotate(e) {
    const {pictureAngle, pictureScale} = this.getProperties(['pictureAngle', 'pictureScale']);
    this.set('pictureAngle', pictureAngle + pictureScale * e.originalEvent.gesture.rotation);
  }
});
