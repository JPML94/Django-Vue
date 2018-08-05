<template>
  <div id="home">

    <div class="page-header">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="btn btn-primary btn-margin"
        @click="currentTab = tab">
        {{ tab }}
      </button>
    </div>

    <br>
    <br>
    <kanban-board
      v-if="currentTab === 'Kanban'"
      class="kanban"
    ></kanban-board>

    <table-board
      v-if="currentTab === 'Table'"
      class="table"
    ></table-board>

  </div>
</template>

<script>
import KanbanBoard from '@/components/KanbanBoard';
import TableBoard from '@/components/TableBoard';

export default {
  name: 'home',
  components: {
    KanbanBoard,
    TableBoard,
  },
  data() {
    return {
      currentTab: 'Kanban',
      tabs: ['Kanban', 'Table'],
    };
  },
  computed: {
    currentTabComponent: () => this.currentTab,
  },
};
</script>

<style>
.page-header h1 {
  font-weight: 300;
  padding-top: 1em;
}

/* .right-bar {
  position: absolute;
  flex: wrap;
  left: 1600px;
  top: 50px;
  right: 50px;
} */

.btn {
  margin-right: 20px;
}
</style>
