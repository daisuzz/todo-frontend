<template>
  <div>
    <v-flex class="text-left">
      <v-btn href="/create" color="#097">Create Todo</v-btn>
    </v-flex>
    <v-flex class="text-center">
      <v-card>
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-center">Title</th>
              <th class="text-center">Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in todoList" :key="item.id">
              <td>{{item.title}}</td>
              <td>{{item.status}}</td>
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
      return {
        todoList: [
          {
            title: "ジムに行く",
            status: "UNDONE"
          },
          {
            title: "朝食を食べる",
            status: "DONE"
          },
          {
            title: "昼食を食べる",
            status: "UNDONE "
          },
          {
            title: "夕食を食べる",
            status: "UNDONE"
          },
          {
            title: "本を読む",
            status: "DONE"
          }
        ]
      }
    }
  }
</script>
