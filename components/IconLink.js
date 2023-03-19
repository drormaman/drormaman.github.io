export default function IconLink({Icon, link}) {
	
	return (
			<a href={link} target='_blank'>
				<Icon/>
			</a>
	);
}