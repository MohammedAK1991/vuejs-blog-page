<template>
  <div class="container blog">
    <div class="main-column">
      <h1>Blog</h1>
      <p>
        Vestibulum consectetur libero non justo aliquam elementum. Nunc sit amet
        justo malesuada, placerat arcu ac, venenatis erat. Phasellus volutpat
        ipsum eget ipsum ornare, ut porttitor ipsum fringilla. Nullam sit amet
        gravida magna, non interdum risus. Curabitur mi leo, sodales at lorem
        ut, rutrum dapibus mauris. Nullam mollis velit vel tellus varius congue.
        Phasellus non neque vitae tortor interdum iaculis ac vel ex. Nulla
        feugiat nunc quis urna faucibus, nec feugiat ligula aliquet. Ut
        vestibulum dolor lacus, eget eleifend tortor sodales in. Cras pharetra
        ipsum ipsum, nec vulputate velit suscipit eu. Donec bibendum odio vel
        augue sodales, eu porta neque accumsan.
      </p>
      <div>
        <span style="text-align: center" class="ad-label">Advertisement</span>
        <div style="display: flex; justify-content: center;">
          <div :id="`ad-placement-id-342AEA22AA`">
            <!-- Ad system will fill this -->
          </div>
        </div>
      </div>
      <h2>Articles</h2>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
    </div>
    <div class="sidebar-column">
      <span class="ad-label">Advertisement</span>
      <div class="ad-container">
        <div :id="`ad-placement-id-FAEEC2623F`">
          <!-- Ad system will fill this -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $config }) {
    let metadata;
    try {
      const baseURL = $config.baseURL; // Use the runtime config
      const page = "blog"; // The name of your page
      const response = await fetch(`${baseURL}/api/metadata/${page}`);
      if (!response.ok) {
        throw new Error("Error fetching metadata");
      }
      metadata = await response.json();
    } catch (e) {
      // Handle error, log it, and use default metadata if necessary
      console.error(e);
      metadata = { metaTitle: 'Default Title', metaDescription: 'Default Description' };

    }
    return { metadata };
  },
  head() {
    // Use metadata to set the page's meta tags
    return {
      title: this.metadata.metaTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.metadata.metaDescription }
      ]
    };
  }
};
</script>


<style src="@/styles/layout.css" />
