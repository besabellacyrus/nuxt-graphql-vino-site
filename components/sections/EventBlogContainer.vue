<template>
  <div class="container mx-auto mt-10">
    <CenterSectionDynamic
      subtitle="JOIN US"
      title="OUR EVENTS"
    ></CenterSectionDynamic>
    <div class="flex flex-wrap justify-center mt-10">
      <div class="w-full md:px-4 mb-6 md:w-1/2">
        <BlogCard></BlogCard>
      </div>
      <div class="w-full md:px-4 mb-6 md:w-1/2">
        <BlogCard></BlogCard>
      </div>
      <div class="w-full md:px-4 mb-6 md:w-1/2">
        <BlogCard></BlogCard>
      </div>
      <div class="w-full md:px-4 mb-6 md:w-1/2">
        <BlogCard></BlogCard>
      </div>
    </div>
    <CenterSectionDynamic
      subtitle="JOIN US"
      title="PARTNER EVENTS"
    ></CenterSectionDynamic>
    <div class="flex flex-wrap justify-center">
      <div class="w-full md:px-4 mb-6 md:w-1/3">
        <BlogCard></BlogCard>
      </div>
      <div class="w-full md:px-4 mb-6 md:w-1/3">
        <BlogCard></BlogCard>
      </div>
      <div class="w-full md:px-4 mb-6 md:w-1/3">
        <BlogCard></BlogCard>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../dynamic/BlogCard"
import CenterSectionDynamic from "../dynamic/CenterSectionDynamic"
export default {
  components: {
    BlogCard,
    CenterSectionDynamic
  }
}
</script>

<style>
</style>