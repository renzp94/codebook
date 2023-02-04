<section>
  <main>
    <slot />
  </main>
</section>

<style lang="less">
  main {
    margin-top: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    main {
      margin-top: 0;
    }
  }
</style>
