<script setup lang="ts">
  import { onMounted, Ref, ref, computed, nextTick } from 'vue';
  import type { EChartsOption } from 'echarts';
  import useEchart from '/@/hooks/useEchart';
  import { RenderType, ThemeType } from '/@/hooks/useEchart/types';
  import Header from '/@/components/Header/index.vue';
  import useConstellation from '/@/hooks/useConstellation';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';

  document.title = `角色命座 | Genshin.Book`;

  const genshinItem = useGenshinItem();
  const constellation = useConstellation();
  const isMobile = computed(() => {
    const screenWidth = document.body.clientWidth;
    return screenWidth < 640;
  });

  // 图表数据
  const yData = ref<string[]>([]);
  const holdingArr = ref<number[]>([]);
  const zeroArr = ref<number[]>([]);
  const oneArr = ref<number[]>([]);
  const twoArr = ref<number[]>([]);
  const threeArr = ref<number[]>([]);
  const fourArr = ref<number[]>([]);
  const fiveArr = ref<number[]>([]);
  const sixArr = ref<number[]>([]);

  const formatter = (params) => {
    const str = `${keepTwoDecimalFull((params.data as number) * 100)}%`;
    return str;
  };
  const yAxisRich = computed<Object>(() => {
    let obj = {};
    yData.value.map((item) => {
      // const r = genshinItem.avatars.find((o) => o.name == item);
      obj[`${item}`] = {
        backgroundColor: {
          // image: r!.url,
          image: genshinItem.avatarMap[item].url,
        },
        align: 'center',
        height: 40,
        width: 40,
      };
    });
    return obj;
  });
  const option = computed<EChartsOption>(() => ({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
      formatter: (params) => {
        let axisValueLabel = genshinItem.avatarMap[params[0].axisValueLabel].name;
        let str0 = '';
        params.forEach((item, idx) => {
          // str1+=`${}`
          str0 += `${item.marker}${item.seriesName}: ${keepTwoDecimalFull(
            (item.data as number) * 100,
          )}%`;

          str0 += idx === params.length - 1 ? '' : '<br/>';
        });
        return axisValueLabel + '<br>' + str0;
      },
    },
    legend: {},
    grid: {
      left: '0%',
      right: '0%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      splitNumber: isMobile.value ? 10 : 50,
      axisLabel: {
        formatter: (params: number) => {
          return `${Math.ceil(params * 100)}%`;
        },
      },
    },
    yAxis: {
      type: 'category',
      data: yData.value,
      axisLabel: {
        formatter: (value) => {
          return '{' + value + '| }';
        },
        rich: yAxisRich.value as any,
      },
    },
    series: [
      {
        name: '持有率',
        type: 'bar',
        label: {
          show: !isMobile.value,
          formatter,
        },
        emphasis: {
          focus: 'series',
        },
        data: holdingArr.value,
      },
      {
        name: '0命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile.value,
          formatter,
        },
        emphasis: {
          focus: 'series',
        },
        data: zeroArr.value,
      },
      {
        name: '1命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile.value,
          formatter,
        },
        emphasis: {
          focus: 'series',
        },
        data: oneArr.value,
      },
      {
        name: '2命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile.value,
          formatter,
        },
        emphasis: {
          focus: 'series',
        },
        data: twoArr.value,
      },
      {
        name: '3命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile.value,
          formatter,
        },
        emphasis: {
          focus: 'series',
        },
        data: threeArr.value,
      },
      {
        name: '4命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile.value,
          formatter,
        },
        emphasis: {
          focus: 'series',
        },
        data: fourArr.value,
      },
      {
        name: '5命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile.value,
          formatter,
        },
        emphasis: {
          focus: 'series',
        },
        data: fiveArr.value,
      },
      {
        name: '6命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile.value,
          formatter,
        },
        emphasis: {
          focus: 'series',
        },
        data: sixArr.value,
      },
    ],
  }));
  const chartEl = ref<HTMLDivElement | null>(null);
  const { setOption, showLoading } = useEchart(
    chartEl as Ref<HTMLDivElement>,
    true,
    true,
    RenderType.SVGRenderer,
    ThemeType.Light,
  );
  const refreshData = () => {
    // barData.value = [820, 932, 901, 934, 1290, 1330, 1320];
    setOption(option.value);
  };

  watchEffect(() => {
    const data = constellation.data;
    data.map((item) => {
      // 处理图表y轴内容
      yData.value.unshift(`${item.avatar}`);
      // yData.value.unshift(genshinItem.avatarMap[item.avatar].name);
      holdingArr.value.unshift(item.holdingRate);
      item.rate.map((el) => {
        switch (el.id) {
          case 0:
            zeroArr.value.unshift(el.value);
            // zeroArr.value.unshift(parseFloat(el.value));
            break;
          case 1:
            oneArr.value.unshift(el.value);
            // oneArr.value.unshift(parseFloat(el.value));
            break;
          case 2:
            // twoArr.value.unshift(parseFloat(el.value));
            twoArr.value.unshift(el.value);
            break;
          case 3:
            threeArr.value.unshift(el.value);
            // threeArr.value.unshift(parseFloat(el.value));
            break;
          case 4:
            fourArr.value.unshift(el.value);
            // fourArr.value.unshift(parseFloat(el.value));
            break;
          case 5:
            fiveArr.value.unshift(el.value);
            // fiveArr.value.unshift(parseFloat(el.value));
            break;
          case 6:
            sixArr.value.unshift(el.value);
            // sixArr.value.unshift(parseFloat(el.value));
            break;
          default:
            break;
        }
      });
    });
    refreshData();
  });

  onMounted(() => {
    nextTick(() => {
      showLoading();
      refreshData();
    });
  });
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header></Header>
    <!-- 角色命座 -->
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-0 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-amber-300">角色命座数据</span>
        </h1>
        <h5 class="text-sm">持有率以及各命座占比</h5>
      </div>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6">
        <el-card class="my-3 mx-2 md:mx-4 lg:mx-4 w-full h-chartHeight">
          <div ref="chartEl" class="chart h-chartHeight"></div>
          <!-- <li class="px-3 pt-4 md:px-10 sm:pt-5 md:pb-8">
           
          </li> -->
        </el-card>
      </ul>
    </article>

    <Footer />
  </div>
</template>
<style lang="less" scoped>
  .chart {
    width: calc(100vh - 20rem - 2rem);
    // height: 2000px;
  }
</style>
