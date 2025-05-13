import { Tweet } from 'react-tweet';
                
//@ts-ignore
export function TweetWithOverlay({ tweetId, showOverlay }) {
  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <Tweet id={tweetId} />
      {showOverlay && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)', // semi-transparent
            zIndex: 10,
            pointerEvents: 'auto', // ensures overlay catches clicks
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '1.5rem',
          }}
        >
          Overlay is active
        </div>
      )}
    </div>
  );
}
