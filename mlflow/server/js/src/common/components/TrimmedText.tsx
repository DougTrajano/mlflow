/**
 * NOTE: this code file was automatically migrated to TypeScript using ts-migrate and
 * may contain multiple `any` type annotations and `@ts-expect-error` directives.
 * If possible, please improve types while making changes to this file. If the type
 * annotations are already looking good, please remove this comment.
 */

import React, { useState } from 'react';
import { Button } from '@databricks/design-system';

type Props = {
  text: string;
  maxSize: number;
  className: string;
  allowShowMore?: boolean;
};

export const TrimmedText = ({ text, maxSize, className, allowShowMore = false }: Props) => {
  if (text.length <= maxSize) {
    return <span className={className}>{text}</span>;
  }
  const trimmedText = `${text.substr(0, maxSize)}...`;
  // Reported during ESLint upgrade
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showMore, setShowMore] = useState(false);
  return (
    <span className={className}>
      {showMore ? text : trimmedText}
      {allowShowMore && (
        <Button
          type="link"
          onClick={() => setShowMore(!showMore)}
          size="small"
          css={styles.expandButton}
          data-test-id="trimmed-text-button"
        >
          {showMore ? 'collapse' : 'expand'}
        </Button>
      )}
    </span>
  );
};

const styles = {
  expandButton: {
    display: 'inline-block',
  },
};
