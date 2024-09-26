export const loadingBox = (loadingBox: HTMLElement) => {
  const start = () => loadingBox.classList.add('active')
  const end = () => loadingBox.classList.remove('active')

  const template = `<div class="form-lcbank-loading" id="form-lcbank-loading" data-loading>
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjMiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTAiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjA7c3ZnU3Bpbm5lcnM2RG90c1NjYWxlMi5lbmQtMC41cyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNC4yMSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMSIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMC5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjQuMjEiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTIiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTQuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxOS43OSIgY3k9IjcuNSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMyIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlMS5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQuMjEiIGN5PSI3LjUiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTQiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTYuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIyMSIgY3k9IjEyIiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU1IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGUzLmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMyIgY3k9IjEyIiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU2IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGU4LmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTkuNzkiIGN5PSIxNi41IiByPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiPjxhbmltYXRlIGlkPSJzdmdTcGlubmVyczZEb3RzU2NhbGU3IiBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSJzdmdTcGlubmVyczZEb3RzU2NhbGU1LmJlZ2luKzAuMXMiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMC42cyIga2V5U3BsaW5lcz0iMCwxLDAsMTsuNTMsMCwuNjEsLjczIiBrZXlUaW1lcz0iMDsuMjsxIiB2YWx1ZXM9IjA7MjswIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD0iNC4yMSIgY3k9IjE2LjUiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTgiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZWEuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNi41IiBjeT0iMTkuNzkiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTkiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTcuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48Y2lyY2xlIGN4PSI3LjUiIGN5PSIxOS43OSIgcj0iMCIgZmlsbD0iY3VycmVudENvbG9yIj48YW5pbWF0ZSBpZD0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlYSIgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0ic3ZnU3Bpbm5lcnM2RG90c1NjYWxlYi5iZWdpbiswLjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjAuNnMiIGtleVNwbGluZXM9IjAsMSwwLDE7LjUzLDAsLjYxLC43MyIga2V5VGltZXM9IjA7LjI7MSIgdmFsdWVzPSIwOzI7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjEyIiBjeT0iMjEiIHI9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PGFuaW1hdGUgaWQ9InN2Z1NwaW5uZXJzNkRvdHNTY2FsZWIiIGZpbGw9ImZyZWV6ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49InN2Z1NwaW5uZXJzNkRvdHNTY2FsZTkuYmVnaW4rMC4xcyIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIwLjZzIiBrZXlTcGxpbmVzPSIwLDEsMCwxOy41MywwLC42MSwuNzMiIGtleVRpbWVzPSIwOy4yOzEiIHZhbHVlcz0iMDsyOzAiLz48L2NpcmNsZT48L3N2Zz4=" alt="loading" width="48" height="48" loading="lazy" class="form-lcbank-loading-img"></div>`

  return {
    start, end, template
  }
}

