<template>
  <div class="container about">
    <div class="main-column">
      <h1>About</h1>
      <p>
        Integer molestie nunc eget laoreet ullamcorper. Nulla facilisi.
        Mauris odio elit, sagittis sed aliquam at, commodo id ante.
        Suspendisse mauris dolor, euismod ac dictum in, viverra eu nunc.
        Vestibulum ut odio id nisi viverra semper vitae in sem. Cras
        cursus orci nec massa hendrerit, tristique fringilla augue
        blandit. Etiam dui nisl, egestas quis consequat vitae, posuere
        vel quam. Suspendisse mollis lacus nisi, in efficitur nisl
        auctor eget. Curabitur congue, odio sit amet consequat
        elementum, turpis libero euismod dui, a mattis arcu massa
        aliquam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <div>
        <span style="text-align: center" class="ad-label">Advertisement</span>
        <div style="display: flex; justify-content: center">
          <div :id="`ad-placement-id-342AEA22AA`">
            <!-- Ad system will fill this -->
          </div>
        </div>
      </div>
      <p>
        Donec convallis lacus eu ante venenatis lacinia. Phasellus quis
        fringilla magna, ut tristique tellus. Maecenas non elit enim.
        Aenean tellus lectus, imperdiet ornare malesuada vitae, rhoncus
        a sem. Curabitur molestie dui id metus ultricies mollis. Etiam
        vestibulum iaculis condimentum. Morbi nisl urna, gravida vel
        elementum in, sodales et leo. Praesent rutrum eros nulla, quis
        ultricies neque dapibus et. Cras egestas ante sed mauris
        scelerisque lobortis.
      </p>
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
      const page = "about"; // The name of your page
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
    return {
      title: this.metadata.metaTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.metadata.metaDescription,
        },
      ],
    };
  },
};
</script>

<style src="@/styles/layout.css" />
