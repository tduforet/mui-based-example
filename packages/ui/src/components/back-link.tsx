import React from 'react'
import ArrowBack from '@mui/icons-material/ArrowBack'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import type {LinkProps} from '@mui/material'

function BackLink<C extends React.ElementType>({
                                                 text,
                                                 sx,
                                                 ...rest
                                               }: LinkProps<C, { component?: C } & { text: string }>) {
  return (
    <MuiLink
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '1.6rem',
        color: 'secondary.dark',
        width: 'fit-content',
        '&&:visited': {
          color: 'secondary.dark',
        },
        ...sx,
      }}
      {...rest}
    >
      <ArrowBack sx={{mr: 2}}/>
      <Typography
        component="span"
        sx={{
          fontWeight: 400,
        }}
        variant="subtitle1"
      >
        {text}
      </Typography>
    </MuiLink>
  )
}

export default BackLink
