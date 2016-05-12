export default function() {
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
}
