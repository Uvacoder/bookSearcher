<template>
  <table class="min-w-full table-auto text-sm xl:text-md">
    <thead>
    <tr class="bg-white text-center border-b border-gray-300 text-gray-400 font-montserrat">
      <th class="rowText">
        Title
      </th>
      <th class="rowText">
        Thumbnail
      </th>
      <th class="rowText">
        Author
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(bodyItem, indx) in $props.tableBody"
      :key="bodyItem.id"
      class="text-gray-800 odd:bg-white even:bg-text_secondary !hover:bg-gray-200"
    >
      <td class="rowText">
        {{ bodyItem.title }}
      </td>
      <td class="rowText">
        <div class="flex items-center font-montserrat">
          {{ sliceDescription(bodyItem.description)}}
        </div>
      </td>
      <td class="rowText">
        <span class="block font-montserrat" v-for="author in bodyItem.authors">
          {{author}}
        </span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BookTable",
  props:{
    tableBody: {
      type: Array,
      required: true
    }
  },
  methods:{
    sliceDescription(text){
      return text ? text.slice(0,100) + '...' : '-'
    }
  }
}


</script>

<style scoped>
.rowText{
  @apply py-4 text-center font-montserrat;
}
</style>
