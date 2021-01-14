<template>
  <div class="employees-list__item">
    <el-image
      class="employees-list__item__avatar"
      :src="avatar"
      fit="cover"
      :alt="altImage"
    >
      <div slot="error" class="employees-list__item__avatar-error">
        <p>{{ altImage }}</p>
      </div>
    </el-image>

    <div class="employees-list__item__info">
      <p class="employees-list__item__fullname">{{ fullName }}</p>
      <p class="employees-list__item__birthdate">{{ birthdate }}</p>
    </div>

    <el-button
      class="btn-edit"
      type="primary"
      icon="el-icon-edit"
      size="mini"
      @click="openEditDialog"
    />
  </div>
</template>

<script>
export default {
  name: "employees-list-item",

  props: {
    employee: {
      type: Object,
    },
  },

  computed: {
    altImage() {
      const { employee } = this;
      return `${employee.last_name[0]}${employee.first_name[0]}`;
    },
    fullName() {
      const { employee } = this;
      return `${employee.last_name} ${employee.first_name} ${employee.middle_name}`;
    },
    avatar() {
      const { employee } = this;
      if (employee.avatar) {
        return employee.avatar.startsWith("data:")
          ? employee.avatar
          : `data:image/png; base64, ${employee.avatar}`;
      }
      return null;
    },

    birthdate() {
      const { employee } = this;

      return new Date(employee.birthdate).toLocaleString("ru", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
    },
  },

  methods: {
    openEditDialog() {
      this.$emit("open-edit-dialog", { employee: this.employee });
    },
  },
};
</script>