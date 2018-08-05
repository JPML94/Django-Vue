<template>
  <div class="backlog-view">
    <h4 class="title">Backlog</h4>
    <div class="card" v-for="item in items" :key="item.id">
        <div class="card-block">
          <span
            :click="deleteItem"
            class="pull-right clickable close-icon"
            data-effect="fadeOut">
            <i class="fa fa-times"></i>
          </span>
          <h5 class="card-title"><span class="text-muted">#{{item.id}}</span>
          {{item.title}} <span :class="badgeClass(item)">{{badgeText(item)}}</span></h5>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const badgeDetail = {
  todo: {
    text: 'todo',
    class: 'badge badge-light',
  },
  inProgress: {
    text: 'in progress',
    class: 'badge badge-info',
  },
  done: {
    text: 'done',
    class: 'badge badge-success',
  },
};
export default {
  name: 'Backlog',
  computed: mapState({
    items: s => [...s.items.todo, ...s.items.inProgress, ...s.items.done],
  }),
  methods: {
    itemLane(item) {
      if (this.$store.state.items.todo.includes(item)) {
        return 'todo';
      } else if (this.$store.state.items.inProgress.includes(item)) {
        return 'inProgress';
      }
      return 'done';
    },
    badgeText(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].text;
    },
    badgeClass(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].class;
    },
    deleteItem() {
    // eslint-disable-next-line
      console.log('delete')
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 10px;
}
.card:last-child {
  margin-bottom: 25px;
}
.card-block {
  padding: 15px;
}

span {
  cursor: pointer;
}
</style>
