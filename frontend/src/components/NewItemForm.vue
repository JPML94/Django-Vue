<template>
    <div class="add-item">
        <b-form
          action="#"
          method="post"
          @submit.prevent="submitForm">
          <h4>Add an entry!</h4>
            <b-form-input
              type="text"
              v-model="itemTitle"
              placeholder="Title of Item" />
            <b-form-textarea
              :rows="3"
              :max-rows="6"
              type="text"
              v-model="itemDescription"
              placeholder="Description of Item" />
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'NewItemForm',
  data() {
    return {
      itemTitle: '',
      itemDescription: '',
    };
  },
  methods: {
    submitForm() {
      if (this.itemTitle) {
        this.$store.commit('addItem', {
          title: this.itemTitle,
          description: this.itemDescription,
        });
        this.itemTitle = '';
        this.itemDescription = '';
      }
    },
  },
};
</script>

<style>
</style>
