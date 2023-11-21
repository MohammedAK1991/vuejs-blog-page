<template>
  <div class="container home">
    <div class="main-column">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        convallis nisl ut quam luctus, sed pulvinar elit facilisis. Nam semper
        tincidunt posuere. Cras gravida pretium luctus. Praesent sit amet ornare
        massa. Aenean dictum nisl metus, quis mollis elit pharetra ac. Duis
        pharetra turpis vitae semper facilisis. Duis ultrices cursus est, nec
        pellentesque nisi feugiat vel. Nam vestibulum et tortor non condimentum.
        Ut rutrum, sem non malesuada lacinia, risus sapien faucibus lorem, quis
        pulvinar ligula lectus eget neque. Curabitur nibh tortor, pretium quis
        varius vel, auctor nec eros. Mauris ex nisi, scelerisque vel augue
        varius, rutrum laoreet felis. Aliquam vulputate eleifend ullamcorper.
        Curabitur consectetur eget mi non tempus. Vivamus interdum porta
        condimentum. Aenean nulla elit, ornare at condimentum mollis, tincidunt
        eu neque.
      </p>
      <div>
        <span style="text-align: center" class="ad-label">Advertisement</span>
        <div style="display: flex; justify-content: center;">
          <div :id="`ad-placement-id-342AEA22AA`">
            <!-- Ad system will fill this -->
          </div>
        </div>
      </div>
      <p>
        Vestibulum sed tellus a tellus congue tempus. Etiam ut erat placerat
        nulla condimentum luctus nec id ipsum. Mauris sit amet fermentum mi.
        Integer molestie nunc eget laoreet ullamcorper. Nulla facilisi. Mauris
        odio elit, sagittis sed aliquam at, commodo id ante. Nulla eu sodales
        massa, in vehicula nulla. Suspendisse mauris dolor, euismod ac dictum
        in, viverra eu nunc. Vestibulum ut odio id nisi viverra semper vitae in
        sem. Cras cursus orci nec massa hendrerit, tristique fringilla augue
        blandit. Etiam dui nisl, egestas quis consequat vitae, posuere vel quam.
        Suspendisse mollis lacus nisi, in efficitur nisl auctor eget. Curabitur
        congue, odio sit amet consequat elementum, turpis libero euismod dui, a
        mattis arcu massa aliquam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <p>
        In bibendum odio vestibulum rutrum tristique. Praesent nec lorem
        imperdiet, imperdiet lorem sed, dignissim diam. Sed mi nisi, lacinia
        vitae dolor eget, congue aliquet orci. Integer rutrum fringilla porta.
        Nullam sagittis aliquam quam, a ultrices purus tempor ac. Donec
        convallis lacus eu ante venenatis lacinia. Phasellus quis fringilla
        magna, ut tristique tellus. Maecenas non elit enim. Aenean tellus
        lectus, imperdiet ornare malesuada vitae, rhoncus a sem. Curabitur
        molestie dui id metus ultricies mollis. Etiam vestibulum iaculis
        condimentum. Morbi nisl urna, gravida vel elementum in, sodales et leo.
        Praesent rutrum eros nulla, quis ultricies neque dapibus et. Cras
        egestas ante sed mauris scelerisque lobortis.
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
  async asyncData({ error, $config }) {
    try {
      const baseURL = $config.baseURL;
      const page = "home";
      const response = await fetch(`${baseURL}/api/metadata/${page}`);
      if (!response.ok) {
        throw new Error("Error fetching metadata");
      }
      const metadata = await response.json();
      return { metadata };
    } catch (e) {
      console.error(e); // Log any error
      error({ statusCode: 404, message: 'Metadata not found' });
    }
  },
  head() {
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