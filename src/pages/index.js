import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Yuudo tutorial
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            データ収集からデータ分析、AI開発まで実務経験のあるデータサイエンティストが
            独断と偏見でAIプロジェクトマネジメント手法を標準化。日本初のLEAN AIPMチュートリアル
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">チュートリアルの特徴</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">即効性を追求しよう</p>
              <p className="mt-4">
                学んでも実践できなければ意味がありません。
                本チュートリアルは、学習後すぐに実務に活かせることを大切にしています。
                優良なオンライン学習コンテンツはすでにありますが、優良であるからこそ、一定の学習時間とお金が必要です。
                このチュートリアルは即効性を最大限に発揮するために、実際に実務で取り組んでいる手法をコンテンツにしています。
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">ゼロではなくイチであろう</p>
              <p className="mt-4">
                このコンテンツはチュートリアルであり、テキストブックではありません。教科書ではなく一人のデータサイエンティスト（家庭教師）が教える一つの手法論（個別指導）です。
                やれない・始められない・進まないプロジェクトが、少しだけ、しかし確実に進むことを目標にしています。
                完璧・完全なプロジェクトマネジメント論よりも「あなたが一つでもプロジェクトをリードした事実」をことを大切にしています。
                今までやったことのないことに挑戦しているプロジェクトなのに、満点じゃないことを追及することほど時間が無駄なことはありません。
                はじめて取り組んだ課題に対して、1問解けた事実が尊いのです。

              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">チームで楽しくやるために</p>
              <p className="mt-4">
                今すぐ実務に活かすために、圧倒的な専門性を得ること捨てています。
                しかし、このチュートリアルを読むと、専門性の高いメンバーがそのスキルを最大限発揮するために必要なことが何かを理解できるでしょう。
                数ヶ月であなたが一つ専門スキルを習得するよりも、数ヶ月で一つのプロジェクトが実用化に向けて推進すること、そして、そのプロジェクトをチームメンバー全員が楽しめていることに価値があると考えます。
                そもそも、私たちがAI開発やデータサイエンスについて手軽に学べている背景には、何十年も研究し人生を捧げてるその道のスペシャリストがその専門性の成果を、誰もがかんたんに使えるようにソフトウェアやライブラリにしてくれたからに他なりません。私達はすでに恩恵を受けています。
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">必要なのはプロジェクトをリードする力</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            大量のデータを使った分析プロジェクトや機械学習を使ったAI開発の実装者には、統計学・数学をはじめとする
            学問的な専門知識とPythonやRを使った機械学習プログラミングスキルが求められます。しかし本チュートリアルは
            これらについて解説していません。
            なぜなら、自分のキャリア・将来に危機感を持っているからデータサイエンスを学び始めた人やデータ活用に
            可能性を感じて学び始めた人たちが伸び伸びと活躍し、学び得たスキルを使って社会に還元するためには、
            AIプロジェクトをリードする力が必要だからです。
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            学ぶよりも、プロジェクトを楽しむこと
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            AIプロジェクトをあなたが楽しんで取り組めるようになること。専門スキルよりも楽しんで仕事ができることが大切です。
            各コンテンツを修了するごとに、学習者のプロジェクトマネジメントの実務スキルが確実にレベルアップするように、
            学習コンテンツをレベル別に分けて設計しています。楽しみながら読み進めてください。
            チュートリアルは、プロジェクトマネジメントや機械学習プログラミングの未経験者を対象にコンテンツを作成しています。
            プロジェクトを始める前の提案段階からプロジェクト開始後のマネジメント実務まで、できる限り網羅的に解説します。

          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            誰もがAIプロジェクトをリードできる環境をつくることで、日本をAI先進国にする
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            本チュートリアルは、実際に実務で使っている手法をまとめています。
            まず、AIプロジェクトを始める前の企画立案から解説しています。
            次に、基本的なタスク管理やプロトタイピングツールを使った企画を具体化するスキルを身につけます。
            その後、AIプロジェクト特有のデータマネジメント・データビジュアライズの基礎知識を習得していきます。
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">さあ始めよう</h3>
      <p className="mt-8 text-xl font-light">
        データ収集からデータ分析、AI開発まで実務経験のあるデータサイエンティストが
        独断と偏見でAIプロジェクトマネジメント手法を標準化。日本初のLEAN AIPMチュートリアル
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
