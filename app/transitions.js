import platform from './utils/platform';

let transitionFunction;

if (platform.isCordova()) {
  transitionFunction = function () {
    this.transition(
      this.fromRoute('index'),
      this.toRoute('detail'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
  };
} else if (platform.isBrowser()) {
  transitionFunction = function () {
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
} else if (platform.isElectron()) {
  transitionFunction = function () {
    this.transition(
      this.fromRoute('index'),
      this.toRoute('detail'),
      this.use('exit-left', {duration: 800, easing: 'ease'}),
      this.reverse('exit-right', {duration: 800, easing: 'ease'})
    );
  };
}

export default transitionFunction;
