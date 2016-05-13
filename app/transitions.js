import platform from './utils/platform';

let transitionFunction;

if (platform.isCordova()) {
  transitionFunction = function() {
    this.transition(
      this.fromRoute('index'),
      this.toRoute('detail'),
      this.use('explode', {
        matchBy: 'data-picture-id',
        use: ['fly-to', {duration: 300}]
      }, {
        use: ['toLeft', {duration: 300}]
      }),
      this.reverse('explode', {
        matchBy: 'data-picture-id',
        use: ['fly-to', {duration: 300}]
      }, {
        use: ['toRight', {duration: 300}]
      })
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
