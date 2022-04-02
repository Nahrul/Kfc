<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
        "Weekly blog articles with all things programing including HTML, CSS, Javascript and more. Register today to never miss a posts",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is title",
          blogHTML: "This is a blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
        {
          title: "This is title",
          blogHTML: "This is a blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  }
};
</script>
