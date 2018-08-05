<template>
  <b-row class="kanban-page">
  <b-col>
  <new-item></new-item>
  </b-col>
  <b-col class="board" cols="8">
    <div class="row">
        <div class="col-md">
          <task-lane id="todo" title="Todo" :items="todoItems"></task-lane>
        </div>
        <div class="col-md">
          <task-lane id="inProgress" title="In progress" :items="inProgressItems"></task-lane>
        </div>
        <div class="col-md">
          <task-lane id="done" title="Done" :items="doneItems"></task-lane>
        </div>
    </div>
  </b-col>
  <b-col>
  <backlog class="backlog"></backlog>
  </b-col>
  </b-row>
</template>

<script>
import { mapState } from 'vuex';
import TaskLane from '@/components/TaskLane';
import Backlog from '@/components/Backlog';
import NewItemForm from '@/components/NewItemForm';


export default {
  name: 'KanbanBoard',
  components: {
    'task-lane': TaskLane,
    backlog: Backlog,
    'new-item': NewItemForm,
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    inProgressItems: s => s.items.inProgress,
    doneItems: s => s.items.done,
  }),
};
</script>
