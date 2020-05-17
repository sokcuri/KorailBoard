import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import KorailBoard from '@/components/KorailBoard.vue';

export default {
  component: KorailBoard,
  title: 'Korail board'
};

export const departures = () => ({
  components: { KorailBoard },
  template: html`
    <korail-board title="출발열차 운행정보"></korail-board>
  `.getHTML(),
  methods: { action: action('clicked') }
});
