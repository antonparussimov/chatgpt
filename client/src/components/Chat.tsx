import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import {EmojiEmotionsSharp} from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { lighten, styled } from '@mui/material/styles';

const StyledMessageRow = styled('div')(() => ({
  '&.contact': {
    '& .bubble': {
      backgroundColor: '#818cf8',
      color: '#ffffff',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      '& .time': {
        marginLeft: 12,
      },
    },
    '&.first-of-group': {
      '& .bubble': {
        borderTopLeftRadius: 20,
      },
    },
    '&.last-of-group': {
      '& .bubble': {
        borderBottomLeftRadius: 20,
      },
    },
  },
  '&.me': {
    paddingLeft: 40,

    '& .bubble': {
      marginLeft: 'auto',
      backgroundColor: '#64748b',
      color: '#ffffff',
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      '& .time': {
        justifyContent: 'flex-end',
        right: 0,
        marginRight: 12,
      },
    },
    '&.first-of-group': {
      '& .bubble': {
        borderTopRightRadius: 20,
      },
    },

    '&.last-of-group': {
      '& .bubble': {
        borderBottomRightRadius: 20,
      },
    },
  },
  '&.contact + .me, &.me + .contact': {
    paddingTop: 20,
    marginTop: 20,
  },
  '&.first-of-group': {
    '& .bubble': {
      borderTopLeftRadius: 20,
      paddingTop: 13,
    },
  },
  '&.last-of-group': {
    '& .bubble': {
      borderBottomLeftRadius: 20,
      paddingBottom: 13,
      '& .time': {
        display: 'flex',
      },
    },
  },
}));

const Chat = () => {
  return (
    <>
      <Box
        className="flex flex-auto h-full min-h-0 w-full"
        sx={{
          backgroundColor: 'primary.dark',
          opacity: [0.9, 0.8, 0.7],
        }}
      >

      </Box>
      <Paper
        square
        component="form"
        // onSubmit={onMessageSubmit}
        className="absolute border-t-1 bottom-0 right-0 left-0 py-4 px-4"
        sx={{
          backgroundColor: '#e8e8e8'
        }}
      >
        <div className="flex items-center">
          <IconButton size="large">
            <EmojiEmotionsSharp />
          </IconButton>

          <IconButton size="large">
            <AttachFileIcon />
          </IconButton>

          <InputBase
            multiline
            maxRows={5}
            autoFocus={false}
            id="message-input"
            className="flex-1 flex grow shrink-0 mx-2 px-4 border-2 rounded-2xl"
            placeholder="Type your message"
            // onChange={onInputChange}
            // value={messageText}
            sx={{ backgroundColor: 'background.paper', padding: '10px' }}
          />

          <IconButton type="submit" size="large">
            <SendIcon/>
          </IconButton>
        </div>
      </Paper>
    </>
  );
}

export default Chat
