<template>
    <div class="add-item">
        <b-form
          action="#"
          method="post"
          @submit.prevent="submitForm">
          <h4>Add a job you are interested in</h4>
            <b-form-input
              type="text"
              v-model="jobTitle"
              placeholder="Job Title" />
            <b-form-input
              type="text"
              v-model="jobCompany"
              placeholder="Company" />
            <b-form-textarea
              :rows="3"
              :max-rows="6"
              type="text"
              v-model="jobDescription"
              placeholder="Job Description" />
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'NewItemForm',
  data() {
    return {
      jobTitle: '',
      jobDescription: '',
    };
  },
  methods: {
    submitForm() {
      if (this.jobTitle) {
        this.$store.commit('addItem', {
          title: this.jobTitle,
          description: this.jobDescription,
        });
        this.jobTitle = '';
        this.jobDescription = '';
      }
    },
  },
};
</script>

<style>

h4 {
  padding: 0.5em;
}

textarea {
  margin-top: 1em;
}

input {
  margin-top: 1em;
}

button {
  margin-top: 1em;
}
</style>
