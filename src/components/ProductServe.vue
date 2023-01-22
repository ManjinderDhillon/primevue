<template>
  <div>
    <ToAst />
    <DataTable
      :value="products"
      contextMenu
      v-model:contextMenuSelection="selectedProduct"
      @rowContextmenu="onRowContextMenu"
      responsiveLayout="scroll"
    >
      <ColUmn field="code" header="Code"></ColUmn>
      <ColUmn field="name" header="Name"></ColUmn>
      <ColUmn field="category" header="Category"></ColUmn>
      <ColUmn field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </ColUmn>
    </DataTable>

    <ContextMenu :model="menuModel" ref="cm" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import ProductService from "../ProductService";

onMounted(() => {
  productService.value
    .getProductsSmall()
    .then((data) => (products.value = data));
});

const cm = ref();
const toast = useToast();
const products = ref();
const productService = ref(new ProductService());
const selectedProduct = ref();
const menuModel = ref([
  {
    label: "View",
    icon: "pi pi-fw pi-search",
    command: () => viewProduct(selectedProduct),
  },
  {
    label: "Delete",
    icon: "pi pi-fw pi-times",
    command: () => deleteProduct(selectedProduct),
  },
]);
const onRowContextMenu = (event) => {
  cm.value.show(event.originalEvent);
};
const viewProduct = (product) => {
  toast.add({
    severity: "info",
    summary: "Product Selected",
    detail: product.name,
  });
};
const deleteProduct = (product) => {
  products.value = products.value.filter((p) => p.id !== product.value.id);
  toast.add({
    severity: "error",
    summary: "Product Deleted",
    detail: product.name,
  });
  selectedProduct.value = null;
};
const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
</script>
