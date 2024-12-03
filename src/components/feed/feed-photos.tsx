import { Photo } from '@/actions/photos-get';
import Link from 'next/link';
import styles from './feed.module.css';
import Image from 'next/image';

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li className={styles.photo} key={photo.id + i}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="50vw"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
