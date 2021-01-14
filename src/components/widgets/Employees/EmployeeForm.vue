<template>
  <el-dialog
    :title="title"
    :visible.sync="showDialog"
    :width="dialogWidth"
    @close="closeDialog"
    :top="dialogTop"
    @closed="clearValidate"
  >
    <el-form
      ref="editing-emoloyee"
      size="small"
      label-position="top"
      label-width="100px"
      :model="formData"
      id="editing-emoloyee"
      @submit.prevent.native="formSubmit"
    >
      <el-row :gutter="20">
        <el-col :span="colSpan">
          <el-form-item required label="Фамилия" prop="last_name">
            <el-input v-model="formData.last_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="colSpan">
          <el-form-item required label="Имя" prop="first_name">
            <el-input v-model="formData.first_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="colSpan">
          <el-form-item required label="Отчество" prop="middle_name">
            <el-input v-model="formData.middle_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="colSpan">
          <el-form-item required label="Дата рождения" prop="birthdate">
            <el-date-picker
              v-model="formData.birthdate"
              type="date"
              format="dd.MM.yyyy"
              value-format="yyyy-MM-ddTHH:mm:ss"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="colSpan">
          <el-form-item required label="Аватар" prop="avatar">
            <!-- <el-row :gutter="12">
              <el-col :span="colSpan">
                <el-image
                  class="employees-list__item__avatar"
                  :src="imageUrl"
                  fit="cover"
                  alt="Аватар"
                >
                  <div slot="error" class="employees-list__item__avatar-error">
                    <p>Аватар</p>
                  </div>
                </el-image>
              </el-col>
              <el-col> -->
            <input
              type="file"
              @change="setAvatar"
              accept="image/png, image/jpeg"
            />
            <!-- </el-col>
            </el-row> -->
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <p v-if="errored" class="form__error">Ну удалось сохранить изменения</p>

    <div slot="footer">
      <el-button @click="showDialog = false">Назад</el-button>
      <el-button
        :loading="loading"
        type="primary"
        form="editing-emoloyee"
        native-type="submit"
        :disabled="!haveChange"
        >Сохранить</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "employee-form",

  props: {
    value: {
      type: Boolean,
    },
    editingEmployee: {
      type: Object,
    },
  },

  data() {
    return {
      default: {
        last_name: "",
        first_name: "",
        middle_name: "",
        avatar: null,
        birthdate: "",
      },
      formData: {
        last_name: "",
        first_name: "",
        middle_name: "",
        avatar: null,
        birthdate: "",
      },

      loading: false,
      errored: false,
    };
  },

  computed: {
    ...mapGetters(["isMobile"]),

    imageUrl: {
      get() {
        if (this.formData.avatar) {
          return this.formData.avatar.startsWith("data:")
            ? this.formData.avatar
            : `data:image/png; base64, ${this.formData.avatar}`;
        } else {
          return null;
        }
      },
      set(v) {
        this.$set(this.formData, "avatar", v.split(",")[1]);
      },
    },

    dialogWidth() {
      return this.isMobile ? "100%" : "768px";
    },

    colSpan() {
      return this.isMobile ? 24 : 12;
    },

    dialogTop() {
      return this.isMobile ? "0" : "15vh";
    },

    showDialog: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },

    isEdit() {
      return !!this.editingEmployee;
    },

    haveChange() {
      let firstCondition = this.isEdit ? this.editingEmployee : this.default;

      return JSON.stringify(this.formData) !== JSON.stringify(firstCondition);
    },

    title() {
      return this.isEdit
        ? "Редактирование данных сотрдуника"
        : "Добавление нового сотрудника";
    },
  },

  methods: {
    formSubmit() {
      this.$refs["editing-emoloyee"].validate(this.saveChanges);
    },

    async saveChanges(valid) {
      if (valid) {
        try {
          this.loading = true;
          const apiMethod = this.isEdit
            ? "api/edit-employee"
            : "api/add-new-employee";

          const { data } = await axios.post(apiMethod, this.formData);

          if (data.id) {
            this.$emit("success");
          }
        } catch {
          this.errored = true;
        } finally {
          this.loading = false;
        }
      }
    },

    async setAvatar(e) {
      const MS = 2 * 1024 * 1024;

      let file = e.target.files[0];

      if (file.size < MS) {
        let objUrl = await this.toBase64(file);

        this.imageUrl = objUrl;
      } else {
        alert("Вес изображения не должен превышать 2 Мб");
      }
    },

    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },

    closeDialog() {
      this.$emit("close-dialog");
    },
    clearValidate() {
      const form = this.$refs["editing-emoloyee"];
      form.clearValidate();
      form.$el.reset();
      this.errored = false;
    },
  },

  watch: {
    editingEmployee(newV) {
      if (newV) {
        this.formData = Object.assign({}, newV);
      } else {
        this.formData = Object.assign({}, this.default);
      }
    },
    formData() {
      this.errored = false;
    },
  },
};
</script>