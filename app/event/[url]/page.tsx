import React from 'react';

import Link from 'next/link';
import { type Metadata } from 'next';

import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

import TicketForm from './components/TicketForm';

const Page = (): React.JSX.Element => (
  <Master>
    <div className='blur-cover'>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
        className='event-cover cover-image flex flex-v-center flex-h-center'
      />
      <div className='cover-info'>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
          className='cover-image image'
        />
        <Heading type={1} color='white' text='谷艺凌香港演唱会' />
        <Heading type={5} color='white' text='TBD' />
        <Heading type={6} color='white' text='香港亚洲国际博览馆' />
      </div>
    </div>
    <Section className='white-background'>
      <div className='container'>
        <div className='event-details'>
          <div>
            <Heading type={4} color='gray' text='Event details' />
            <div className='paragraph-container gray'>
              <p>
                2022年谷艺凌参加星耀中国好声音，荣获百强歌手 [3] 。
                谷艺凌以原唱身份演唱了《情似火》 [1] 和《贝如塔女王》 [2] 两首歌曲。
                在北京群星伟业公司 [6] 的帮助下，谷艺凌的《情似火》专辑发行于2023年6月12日。
                [4] 之后谷艺凌在横店影视城街头表演，开通抖音账号：谷艺凌情似火大舞台。 [5]
                谷艺凌为了提升自己的唱功，拜师赫拉含青。赫拉含青于2024年1月10日零报酬地
                帮助谷艺凌演唱了原创歌曲《贝如塔女王》。在广大网友的见证下，谷艺凌凭借她的歌声和才华，被认可为"贝如塔女王"。 [5]
              </p>
              <div class="basic-info J-basic-info cmn-clearfix">
              <dl class="basicInfo-block basicInfo-left">
                <dt class="basicInfo-item name" id="basic-name">艺&nbsp;&nbsp;&nbsp;&nbsp;名</dt>
                <dd class="basicInfo-item value">
                谷艺凌<sup class="sup--normal" data-sup="5" data-ctrmap=":5,">
                [5]</sup><a class="sup-anchor" name="ref_5_" id="ref_5_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">外文名</dt>
                <dd class="basicInfo-item value">
                Slut/Julia<sup class="sup--normal" data-sup="5" data-ctrmap=":5,">
                [5]</sup><a class="sup-anchor" name="ref_5_" id="ref_5_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">昵&nbsp;&nbsp;&nbsp;&nbsp;称</dt>
                <dd class="basicInfo-item value">
                谷谷鸡/贝如塔女王<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
                [2]</sup><a class="sup-anchor" name="ref_2_" id="ref_2_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">性&nbsp;&nbsp;&nbsp;&nbsp;别</dt>
                <dd class="basicInfo-item value">
                女
                </dd>
                <dt class="basicInfo-item name" id="basic-name">民&nbsp;&nbsp;&nbsp;&nbsp;族</dt>
                <dd class="basicInfo-item value">
                汉族
                </dd>
                <dt class="basicInfo-item name" id="basic-name">国&nbsp;&nbsp;&nbsp;&nbsp;籍</dt>
                <dd class="basicInfo-item value">
                <a target="_blank" href="/item/%E4%B8%AD%E5%9B%BD/22516505" data-lemmaid="22516505">中国</a><sup class="sup--normal" data-sup="5" data-ctrmap=":5,">
                [5]</sup><a class="sup-anchor" name="ref_5_" id="ref_5_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">出生地</dt>
                <dd class="basicInfo-item value">
                之江明州<sup class="sup--normal" data-sup="7" data-ctrmap=":7,">
                [7]</sup><a class="sup-anchor" name="ref_7_" id="ref_7_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">毕业院校</dt>
                <dd class="basicInfo-item value">
                <a target="_blank" href="/item/%E4%B8%AD%E5%9B%BD%E4%BC%A0%E5%AA%92%E5%A4%A7%E5%AD%A6/192109" data-lemmaid="192109">中国传媒大学</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">身&nbsp;&nbsp;&nbsp;&nbsp;高</dt>
                <dd class="basicInfo-item value">
                170 cm
                </dd>
                </dl>
                <dl class="basicInfo-block basicInfo-right">
                <dt class="basicInfo-item name" id="basic-name">体&nbsp;&nbsp;&nbsp;&nbsp;重</dt>
                <dd class="basicInfo-item value">
                70 kg
                </dd>
                <dt class="basicInfo-item name" id="basic-name">成名作品</dt>
                <dd class="basicInfo-item value">
                《情似火》《贝如塔女王》《艺凌有约》<sup class="sup--normal" data-sup="1-3" data-ctrmap=":1,:2,:3,">
                [1-3]</sup><a class="sup-anchor" name="ref_1_" id="ref_1_">&nbsp;</a><a class="sup-anchor" name="ref_2_" id="ref_2_">&nbsp;</a><a class="sup-anchor" name="ref_3_" id="ref_3_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">经纪公司</dt>
                <dd class="basicInfo-item value">
                丫G公司<sup class="sup--normal" data-sup="5" data-ctrmap=":5,">
                [5]</sup><a class="sup-anchor" name="ref_5_" id="ref_5_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">音乐类型</dt>
                <dd class="basicInfo-item value">
                流行
                </dd>
                <dt class="basicInfo-item name" id="basic-name">代表作品</dt>
                <dd class="basicInfo-item value">
                <a target="_blank" href="/item/%E8%B4%9D%E5%A6%82%E5%A1%94%E5%A5%B3%E7%8E%8B/63958543" data-lemmaid="63958543">贝如塔女王</a><sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
                [2]</sup><a class="sup-anchor" name="ref_2_" id="ref_2_">&nbsp;</a>
                、情似火<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
                [1]</sup><a class="sup-anchor" name="ref_1_" id="ref_1_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">流&nbsp;&nbsp;&nbsp;&nbsp;派</dt>
                <dd class="basicInfo-item value">
                贝塔派<sup class="sup--normal" data-sup="7" data-ctrmap=":7,">
                [7]</sup><a class="sup-anchor" name="ref_7_" id="ref_7_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">职&nbsp;&nbsp;&nbsp;&nbsp;业</dt>
                <dd class="basicInfo-item value">
                歌手，网红，演员，家政公司老板，足浴店老板，艳舞女郎，KTV小姐<sup class="sup--normal" data-sup="5" data-ctrmap=":5,:7,">
                [5]</sup><a class="sup-anchor" name="ref_5_" id="ref_5_">&nbsp;</a>
                <sup class="sup--normal" data-sup="7" data-ctrmap=":5,:7,">
                [7]</sup><a class="sup-anchor" name="ref_7_" id="ref_7_">&nbsp;</a>
                </dd>
                <dt class="basicInfo-item name" id="basic-name">所获奖项</dt>
                <dd class="basicInfo-item value">
                《星耀中国》好声音百强歌手<sup class="sup--normal" data-sup="3" data-ctrmap=":3,">
                [3]</sup><a class="sup-anchor" name="ref_3_" id="ref_3_">&nbsp;</a>
                </dd>
                </dl>
              </div>
            </div>
          </div>
          <div>
            <div className='ticket-box'>
              <div className='ticket-box-header'>
                <Heading type={4} color='gray' text='Tickets' />
              </div>
              <TicketForm
                data={[
                  {
                    id: 1,
                    name: 'VIP',
                    price: 'CNY 39,999',
                    ordering: 1,
                    // soldout: true,
                    information: '赠送：谷艺凌签名小卡，谷艺凌同款紫色心情，可以带一个同伴，活动结束有谷老师亲自会见进行服务'
                  },
                  {
                    id: 2,
                    name: '内场近区',
                    price: 'CNY 8,999',
                    ordering: 2,
                    information: '赠送：谷艺凌同款紫色心情'
                  },
                  {
                    id: 3,
                    name: '内场远区',
                    price: 'CNY 5,999',
                    ordering: 3,
                    information: '赠送：谷艺凌同款紫色心情'
                  },
                  {
                    id: 4,
                    name: '外场近区',
                    price: 'CNY 3,999',
                    ordering: 4,
                    information: '赠送：谷艺凌同款紫色心情'
                  },
                  {
                    id: 5,
                    name: '外场远区',
                    price: 'CNY 2,999',
                    ordering: 5,
                    information: '赠送：谷艺凌同款紫色心情'
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <Heading type={4} color='gray' text='香港亚洲国际博览馆' />

        <Heading type={6} color='gray' text='Address' />
        <div className='paragraph-container'>
          <p className='gray'>Lorem ipsum dolor sit amet consecteteur adispicing elit.</p>
        </div>
        <Heading type={6} color='gray' text='How to get there?' />
        <div className='paragraph-container'>
          <p className='gray'>Lorem ipsum dolor sit amet consecteteur adispicing elit.</p>
          <p className='gray'>
            <Link href='/venue/1' className='blue'>
              Venue details
            </Link>
            &nbsp; &bull; &nbsp;
            <a target='_blank' href='/' className='blue'>
              Get directions
            </a>
            &nbsp; &bull; &nbsp;
            <a target='_blank' href='/' className='blue'>
              Show in map
            </a>
          </p>
        </div>
      </div>
    </Section>

    <CardGroup url='list' title='Other events' color='orange' background='gray'>
      <EventCard
        url='1'
        from='20'
        color='blue'
        when='TBD'
        name='谷艺凌香港演唱会'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='blue'
        when='Wed, Aug 9, 2024 22:00'
        name='朴彩英个人演唱会'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='10'
        color='blue'
        when='Sun, Mar 14, 2024 15:00'
        name='Lisa疯马秀'
        venue='Wembley Stadium'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='60'
        color='blue'
        when='Mon, Jul 2, 2024 20:00'
        name='简英纠音大会'
        venue='Eventim Apollo'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='20'
        color='blue'
        when='TBD'
        name='那艺娜新歌《恨如张冰》发布会'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='blue'
        when='Wed, Aug 9, 2024 22:00'
        name='《虾面爱加油菜花》专场演唱会'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>
  </Master>
);

const title = '谷艺凌香港演唱会';
const canonical = 'https://modern-ticketing.com/event/1';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'modern ticketing',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Modern Ticketing',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
