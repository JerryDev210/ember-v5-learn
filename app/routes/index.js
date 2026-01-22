import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let respone = await fetch('http://localhost:4200/api/rentals.json');
    let result = await respone.json();
    const { data } = result;
    return data.map((rental) => {
      const { attributes } = rental;
      return { ...attributes };
    });
    // return result.data;
  }
}
