export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('detail'),
    this.useAndReverse('explode', {
      matchBy: 'data-picture-id',
      use: ['fly-to', {duration: 400, easing: 'ease'}]
    }, {
      use: ['fade']
    })
  );
}
