<script setup lang="ts">
  import { onMounted, Ref, ref, nextTick } from 'vue';
  // import type { EChartsOption } from 'echarts';
  import useEchart from '/@/hooks/useEchart';
  import { RenderType, ThemeType } from '/@/hooks/useEchart/types';
  import Header from '/@/components/Header/index.vue';
  import useConstellation from '/@/hooks/useConstellation';
  import useGenshinItem from '/@/hooks/useGenshinItem';
  import { keepTwoDecimalFull } from '/@/utils/keepTwoDecimalFull';

  document.title = `角色命座 | Genshin.Book`;

  const genshinItem = useGenshinItem();
  let avatarMap = genshinItem.avatarMap;
  const constellation = useConstellation();
  let isMobile = document.body.clientWidth < 600;

  // 图表数据
  let yData: string[] = [];
  let holdingArr: number[] = [];
  let zeroArr: number[] = [];
  let oneArr: number[] = [];
  let twoArr: number[] = [];
  let threeArr: number[] = [];
  let fourArr: number[] = [];
  let fiveArr: number[] = [];
  let sixArr: number[] = [];

  const formatter = (params) => {
    if (params.data < 0.04) {
      return '';
    }
    const str = `${keepTwoDecimalFull((params.data as number) * 100)}%`;
    return str;
  };
  const yAxisRich = (yData) => {
    let obj: any = {};
    yData.map((item) => {
      // const r = genshinItem.avatars.find((o) => o.name == item);
      obj[`${item}`] = {
        backgroundColor: {
          // image: r!.url,
          image: avatarMap[`${item}`]?.url,
        },
        align: 'center',
        height: 40,
        width: 40,
      };
    });
    return obj;
  };
  // const option = computed<EChartsOption>(() => ());
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
      formatter: (params) => {
        let axisValueLabel = avatarMap[params[0].axisValueLabel].name;
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
    legend: {
      data: ['持有率', '0命', '1命', '2命', '3命', '4命', '5命', '6命'],
      selectedMode: 'multiple',
      selected: {
        持有率: true,
        '0命': false,
        '1命': false,
        '2命': false,
        '3命': false,
        '4命': false,
        '5命': false,
        '6命': false,
      },
      textStyle: { color: '#6E7079' },
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      splitNumber: isMobile ? 10 : 50,
      splitLine: {
        show: false,
      },
      axisLabel: {
        formatter: (params: number) => {
          return `${Math.ceil(params * 100)}%`;
        },
      },
    },
    yAxis: {
      type: 'category',
      data: yData,
      splitLine: {
        show: false,
      },
      axisLabel: {
        formatter: (value) => {
          return '{' + value + '| }';
        },
        rich: {},
      },
    },
    series: [
      {
        name: '持有率',
        type: 'bar',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: holdingArr,
      },
      {
        name: '0命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: zeroArr,
      },
      {
        name: '1命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: oneArr,
      },
      {
        name: '2命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: twoArr,
      },
      {
        name: '3命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: threeArr,
      },
      {
        name: '4命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: fourArr,
      },
      {
        name: '5命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: fiveArr,
      },
      {
        name: '6命',
        type: 'bar',
        stack: 'total',
        label: {
          show: !isMobile,
          formatter,
        },
        emphasis: {
          focus: isMobile ? 'series' : 'none',
        },
        data: sixArr,
      },
    ],
  };
  const chartEl = ref<HTMLDivElement | null>(null);
  const { setOption, showLoading } = useEchart(
    chartEl as Ref<HTMLDivElement>,
    true,
    true,
    RenderType.SVGRenderer,
    ThemeType.Light,
  );
  const refreshData = () => {
    const _rich = yAxisRich(yData);
    option.yAxis.axisLabel.rich = _rich;
    setOption(option as any);
  };

  watchEffect(() => {
    const data = constellation.data;
    avatarMap = genshinItem.avatarMap;
    data.map((item) => {
      // 处理图表y轴内容
      yData.unshift(`${item.avatar}`);
      // yData.value.unshift(genshinItem.avatarMap[item.avatar].name);
      holdingArr.unshift(item.holdingRate);
      item.rate.map((el) => {
        switch (el.id) {
          case 0:
            zeroArr.unshift(el.value);
            // zeroArr.value.unshift(parseFloat(el.value));
            break;
          case 1:
            oneArr.unshift(el.value);
            // oneArr.value.unshift(parseFloat(el.value));
            break;
          case 2:
            // twoArr.value.unshift(parseFloat(el.value));
            twoArr.unshift(el.value);
            break;
          case 3:
            threeArr.unshift(el.value);
            // threeArr.value.unshift(parseFloat(el.value));
            break;
          case 4:
            fourArr.unshift(el.value);
            // fourArr.value.unshift(parseFloat(el.value));
            break;
          case 5:
            fiveArr.unshift(el.value);
            // fiveArr.value.unshift(parseFloat(el.value));
            break;
          case 6:
            sixArr.unshift(el.value);
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
      if (constellation.data.length > 0) {
        refreshData();
      }
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
          <span class="border-b-2 border-b-gray-400">角色命座数据</span>
        </h1>
        <h5 class="text-sm">持有率以及各命座占比</h5>
      </div>
    </main>
    <div class="text-xs text-center"> 点击查看更多命座数据 👇</div>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-0 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6">
        <el-card class="mb-3 mx-2 md:mx-4 lg:mx-4 w-full h-chartHeight">
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
    width: calc(100vw - 20rem -2rem);
    // height: 2000px;
  }
</style>
