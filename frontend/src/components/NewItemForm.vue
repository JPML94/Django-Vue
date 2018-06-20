<template>
    <div class="add-item">
        <b-form action="#" method="post" @submit.prevent="submitForm">
            <b-form-input active type="text" v-model="itemTitle" placeholder="Title of Item" />
            <b-form-textarea :rows="3" :max-rows="6" type="text" v-model="itemDescription" placeholder="Description of Item" />
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
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: white;
}
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
.add-item {
  margin: 30px 0;
}
</style>
