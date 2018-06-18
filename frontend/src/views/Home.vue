<template>
  <div id="home">

    <div class="page-header">
      <h1>Kanban Board</h1>
    </div>

    <backlog></backlog>

    <kanban-board></kanban-board>

  </div>
</template>

<script>
import KanbanBoard from '@/components/KanbanBoard'
import Backlog from '@/components/Backlog'

export default {
  name: 'home',
  components: {
    KanbanBoard,
    Backlog
  }
}
</script>

<style>
.page-header h1 {
  font-weight: 300;
}
</style>
