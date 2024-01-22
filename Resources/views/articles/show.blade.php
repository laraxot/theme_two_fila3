<div>

    <x-banner image="$article->getMainImage()">
        <div class="text-4xl text-white">
            <h1>
                {{ $article->title }}
                {{-- @isset($isPeekPreviewModal) [Preview] @endisset --}}
            </h1>
        </div>
    </x-banner>

    <x-std tpl='container'>
        <div class="prose mt-8 mx-auto text-black">
            @if ($article->content_blocks)
                <x-render.blocks :blocks="$article->content_blocks" :model="$article" />
            @endif

            <hr>

            <livewire:article.test-chart />

            <x-article.meta :article="$article" />

            <x-article.footer :article="$article" :blocks="$article->footer_blocks" />

                <div>
                    <canvas id="myChart"></canvas>
                </div>
                
                <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                
                <script>
                const ctx = document.getElementById('myChart');
                
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                    },
                    options: {
                    scales: {
                        y: {
                        beginAtZero: true
                        }
                    }
                    }
                });
                </script>

        </div>
    </x-std>
</div>
