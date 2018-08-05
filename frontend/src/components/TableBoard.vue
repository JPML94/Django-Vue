<template>
  <div>
    <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col>
        <b-form-group horizontal label="Filter">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group horizontal label="Sort">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group horizontal label="Items per page">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-table
      show-empty
      striped
      hover
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered">
      <template
        slot="logo"
        slot-scope="row">
        <img class="form-control" :src="row.item.logo" />
      </template>
      <template
        slot="jobTitle"
        slot-scope="row">
        <input class="form-control" v-model="row.item.jobTitle" />
      </template>
      <template
        slot="contacts"
        slot-scope="row">
        <input class="form-control" v-model="row.item.contacts" />
      </template>
      <template
        slot="deadline-1"
        slot-scope="row">
        <input class="form-control" v-model="row.item.deadlines[0]" />
      </template>
      <template
        slot="deadline-2"
        slot-scope="row">
        <input class="form-control" v-model="row.item.deadlines[1]" />
      </template>
      <template
        slot="notes"
        slot-scope="row">
        <input class="form-control" v-model="row.item.notes[0].text" />
      </template>
      <template
        slot="tasks"
        slot-scope="row">
        <input class="form-control" v-model="row.item.tasks[0].text" />
      </template>
      <template
        slot="stage"
        slot-scope="row">
        <input class="form-control" v-model="row.item.stage" />
      </template>
      <template
        slot="actions"
        slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button
          size="sm"
          @click.stop="info(row.item, row.index, $event.target)"
          class="mr-1">
          Info Modal
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
      </b-table>

      <b-row>
        <!-- Info modal -->
        <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
          <pre>{{ modalInfo.content }}</pre>
        </b-modal>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TaskLaneItem from './TaskLaneItem';

const items = [
  {
    logo: 'https://vuejs.org/images/logo.png',
    jobTitle: 'Senior Product Designer',
    contacts: ['Jose Pelao'],
    deadlines: [1529620132, 1529620132],
    notes: [
      { text: 'lalalala', timestamp: 1529620132 },
      { text: 'note dos', timestamp: 1529620132 }],
    tasks: [
      { text: 'task1', timestamp: 1529620132 },
      { text: 'task2', timestamp: 1529620132 }],
    stage: 'In Progress',
  },
  {
    logo: 'https://vuejs.org/images/logo.png',
    jobTitle: 'Senior Product Designer',
    contacts: ['Jose Pelao'],
    deadlines: [1529620132, 1529620132],
    notes: [
      { text: 'lalalala', timestamp: 1529620132 },
      { text: 'note dos', timestamp: 1529620132 }],
    tasks: [
      { text: 'task1', timestamp: 1529620132 },
      { text: 'task2', timestamp: 1529620132 }],
    stage: 'In Progress',
  },
  {
    logo: 'https://vuejs.org/images/logo.png',
    jobTitle: 'Senior Product Designer',
    contacts: ['Jose Pelao', 'Pepe Joan'],
    deadlines: [1529620132, 1529620132],
    notes: [
      { text: 'lalalala', timestamp: 1529620132 },
      { text: 'note dos', timestamp: 1529620132 }],
    tasks: [
      { text: 'task1', timestamp: 1529620132 },
      { text: 'task2', timestamp: 1529620132 }],
    stage: 'In Progress',
  },
  {
    logo: 'https://vuejs.org/images/logo.png',
    jobTitle: 'Senior Product Designer',
    contacts: ['Jose Pelao'],
    deadlines: [1529620132, 1529620132],
    notes: [
      { text: 'lalalala', timestamp: 1529620132 },
      { text: 'note dos', timestamp: 1529620132 }],
    tasks: [
      { text: 'task1', timestamp: 1529620132 },
      { text: 'task2', timestamp: 1529620132 }],
    stage: 'In Progress',
  },
];

export default {
  name: 'TableBoard',
  components: {
    item: TaskLaneItem,
  },
  data() {
    return {
      items,
      fields: [
        {
          key: 'logo',
          label: 'Logo',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'jobTitle',
          label: 'Job Title',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'contacts',
          label: 'Contact',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'deadline-1',
          label: 'Deadline 1',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'deadline-2',
          label: 'Deadline 2',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'notes',
          label: 'Notes',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'tasks',
          label: 'Tasks',
          sortable: true,
          class: 'text-center',
        },
        {
          key: 'stage',
          label: 'Stage',
          sortable: true,
          class: 'text-center',
        },
        { key: 'actions', label: 'Actions' },
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' },
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      // eslint-disable-next-line
      return this.fields.filter(f => f.sortable).map(f => {
        return { text: f.label, value: f.key };
      });
    },
  },
  methods: {
    info(item, index, button) {
      this.modalInfo.title = `Row index: ${index}`;
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit('bv::show::modal', 'modalInfo', button);
    },
    resetModal() {
      this.modalInfo.title = '';
      this.modalInfo.content = '';
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>


<style scoped>
img {
  width: 50px;
}

input {
  width: 100%;
}

</style>
