<script lang="ts">
  import { dateFormat } from '$lib/utils'
	import type { PageData } from './$types';
  export let data: PageData
</script>

<svelte:head>
  <title>{data.page.title}</title>
</svelte:head>

<section class="md">
  <h1 class="title">
    {data.page.title}
  </h1>
  <div class="info">
    <div class="author">作者：{data.page.author}</div>
    <div class="time">时间：{dateFormat(data.page.time)}</div>
  </div>

  <div class="md-content">
    {@html data.page.html}
  </div>
</section>

<style>
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-gray-6);
    font-size: 12px;
    margin-bottom: 0.75rem;
  }

  .author {
    margin-right: 1.5rem;
  }
</style>
