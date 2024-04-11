import Link from 'next/link';

import Badge from '@components/Badge/Badge';
import ButtonLink from '@components/Button/ButtonLink';

type Props = {
  url: string;
  from: string;
  when: string;
  name: string;
  venue: string;
  image: string;
  color: string;
};

const EventCard = ({ url, from, when, name, venue, image, color }: Props) => (
  <div className='card'>
    <Link href={`/event/${url}`}>
      <div className='card-title'>
        <h4>{name}</h4>
      </div>
      <div
        className='card-image'
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <Badge color='gray' text='NEW' />
      </div>
      <div className='card-info'>
        <p>
          <span className='material-symbols-outlined'>event</span> {when}
        </p>
        <p>
          <span className='material-symbols-outlined'>apartment</span> {venue}
        </p>
        <p>
          <span className='material-symbols-outlined'>local_activity</span> from{' '}
          <strong>£{from}</strong>
        </p>
      </div>
    </Link>
    <div className='card-buttons'>
      <ButtonLink
        color={`${color}-filled`}
        text='Details'
        rightIcon='arrow_forward'
        url={`event/${url}`}
      />
    </div>
  </div>
);

export default EventCard;
