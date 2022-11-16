import { extendTheme } from "@chakra-ui/react";


export const NewTheme = extendTheme({
primary:{
	100: '#E6E5A3',
	200: '#A9AF7E',
	300: '#7D8F69',
	400: '#557153'
},
secondery:{
	100: '#6B728E',
	200: '#50577A',
	300: '#474E68',
	400: '#404258'
},
warning:{
	100: '#FD841F',
	200: '#FD841F'
},
textStyles:{
	fontSize:['48px','72px'],
	fontWight: 'bold',
	letterSpacing: '10px'
},
componentes:{
	Button:{
		sizes:{
			sm: {
				fontSize: 'md'
			}
		},
		variants:{
			base:{
				color: 'warning.100',
				fontSize:'md'
			},
			sm:{
				color: 'praimary.100',
				fontSize: 'lg'
			},
			md:{
				color: 'praimary.400',
				fontSize: 'xl'
			},
			defaultProps:{
				fontSize:'lg',
				 variant: 'sm',
				color: 'green',
			}
		}
	}
},

})