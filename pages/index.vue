<template>
  <div>
    <v-card>
      <v-form ref="form" @submit.prevent="submit">
        <v-card-actions>
          <v-btn
            color="#097"
            type="submit"
          >Create
          </v-btn>
        </v-card-actions>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
            <tr>
              <td>Title</td>
              <td>
                <v-text-field v-model="form.title"></v-text-field>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-form>
    </v-card>
    <v-flex class="text-center">
      <v-card>
        <v-card-title>Your ToDo List</v-card-title>
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-center">
                Title
              </th>
              <th class="text-center">
                Status
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in todoList" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.status }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
  export default {
    data() {
      const defaultForm = {
        title: "",
        status: "UNDONE"
      }
      return {
        form: Object.assign({}, defaultForm),
        todoList: [],
        defaultForm
      }
    },
    methods: {
      resetForm() {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit() {
        this.todoList.push(this.form)
        this.resetForm()
      },
    }
  }
</script>
