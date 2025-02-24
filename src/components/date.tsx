import {useFormatter} from 'next-intl';

type Props = {
  published: Date;
};

export default function BlogPostPublishedDate({published}: Props) {
  // ✅ Works in any environment
  const format = useFormatter();

  // "Sep 25, 2024"
  format.dateTime(published);

  // "8 days ago"
  format.relativeTime(published);
}