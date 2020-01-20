<template>
  <div class="event-wrapper">
    <div v-if="eventPage">
      <HeroImageDynamic :img-url="eventPage[0].image.sourceUrl"></HeroImageDynamic>
      <div class="container mx-auto text-center event-content">
        <div class="wow fadeInDown mx-10">
          <div class="subtitle">{{ eventPage[1].subTitle}}</div>
          <div class="title">{{ eventPage[1].title }}</div>
        </div>
        <p class="bar-top-line-center mt-10 wow fadeInUp">
        </p>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="events-wrapper">
        <div
          class="events-items"
          v-if="events"
        >
          <div
            v-for="(event, index) in eventsData"
            :key="index"
            class="event-item"
          >
            <div class="event-image">
              <img
                :src="event.node.events_gql.image.sourceUrl"
                alt=""
              >
            </div>
            <div class="event-info">
              <h1 class="subtitle">{{ event.node.title }}</h1>
              <p><b>{{ event.node.events_gql.date }}</b></p>
              <p>{{ event.node.events_gql.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImageDynamic from "~/components/dynamic/HeroImageDynamic"
import pageGql from "~/apollo/queries/page"
import eventsGql from "~/apollo/queries/events"

export default {
  components: {
    HeroImageDynamic
  },
  data () {
    return {
      slug: null,
      eventPage: null,
      eventsData: null
    }
  },
  mounted () {
    const { fc: { homeFc } } = this.vino_pageBy;
    const { edges } = this.events;
    console.log({ edges })
    this.eventsData = edges;
    this.eventPage = homeFc;
  },
  apollo: {
    vino_pageBy: {
      query: pageGql,
      variables () {
        return {
          slug: 'events'
        }
      }
    },
    events: {
      query: eventsGql
    }
  },
  head () {
    return {
      title: `Vino 🍷 Events`,
    }
  }
}
</script>

<style lang="scss" scoped>
.event-wrapper {
  .event-content {
    padding: 0 26rem;
    @media screen and (max-width: 768px) {
      padding: 0 0rem;
    }
  }
}
.events-wrapper {
  max-width: 98rem;
  margin: 10rem auto 0;
  .events-items {
    display: grid;

    @media screen and (min-width: 769px) {
      grid-template-columns: repeat(2, minmax(26rem, 1fr));
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
    }
    grid-gap: 2rem;
  }
}
.event-item {
  min-height: 44rem;
}
.event-image {
  height: 24rem;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.event-info {
  background-color: rgb(236, 236, 236);
  border-bottom: 0.4rem solid rgb(215, 216, 218);
  padding: 1rem;
  p {
    line-height: 1.5;
    margin-top: 1rem;
  }
  h1 {
    margin: 0;
    font-weight: bold;
  }
}
</style>