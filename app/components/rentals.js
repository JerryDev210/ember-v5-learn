import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Rentals extends Component {
  @tracked query = '';

  @action
  updateQuery(event) {
    let formData = new FormData(event.currentTarget);
    this.query = formData.get('search-house');
  }

  @action
  handleSubmit(event) {
    event.preventDefault();
    this.updateQuery(event);
  }
}
