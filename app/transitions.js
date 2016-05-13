import platform from './utils/platform';

let transitionFunction;

if (platform.isCordova()) {
  transitionFunction = function() {
    this.transition(
      this.fromRoute('index'),
      this.toRoute('detail'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
  };
} else {
  transitionFunction = function() {
    this.transition(
      this.fromRoute('index'),
      this.toRoute('detail'),
      this.useAndReverse('explode', {
        matchBy: 'data-picture-id',
        use: ['fly-to', {duration: 300}]
      }, {
        use: ['fade', {duration: 300}]
      })
    );
  };
}

export default transitionFunction;
