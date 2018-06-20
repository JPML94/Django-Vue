<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskLaneItem from './TaskLaneItem';

const items = [
  { Stage: 'Todo', Title: 'Dickerson', Description: 'Macdonald' },
  { Stage: 'Todo', Title: 'Mackson', Description: 'Gerald' },
  { Stage: 'Todo', Title: 'Devlon', Description: 'Beme' },
  { Stage: 'Todo', Title: 'Pamper', Description: 'Paper' },
];

export default {
  name: 'TableBoard',
  // props: ['items', 'title', 'id'],
  components: {
    item: TaskLaneItem,
  },
  data() {
    return {
      items,
    };
  },
  computed: {
    ...mapState({
      todoItems: s => s.items.todo,
      inProgressItems: s => s.items.inProgress,
      doneItems: s => s.items.done,
    }),
    itemCount() {
      if (!this.items) return '';
      if (this.items.length === 1) return '1 task';
      return `${this.items.length} tasks`;
    },
  },
};

</script>

<style>
</style>
