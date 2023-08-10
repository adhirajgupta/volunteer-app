import React from 'react';
import { Box, Divider, Grid, List, ListItem, Typography, } from '@mui/material';
import { ScrollView, View, Image } from 'react-native';

const activitiesList = [
	{
		title: 'Classroom Assistance',
		activities: [
			'Reading to or with children',
			'Organizing class parties or special events',
			'Assisting with classroom activities',
			'Creating educational materials or displays',
		],
	},
	{
		title: 'Field Trips and Outings',
		activities: [
			'Chaperoning field trips',
			'Driving students to and from events',
			'Providing snacks or meals for outings',
			'Assisting with fundraising efforts',
		],
	},
	{
		title: 'Administrative Support',
		activities: [
			'Assisting in the school office',
			'Participating in parent-teacher association meetings',
			'Serving on school boards or committees',
			'Providing translation or interpreter services',
		],
	},
];
const benefitsList = [
	{
		title: 'Active Role in Children\'s Lives',
		activities: [
			{
				text: `When parents get involved in school activities, they show their children that education is an essential part of life &
education starts by offering
support to children both at
home and at school.`,
				imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwy2T7AYeXm3uTX35fXsLjmD-bRcviXiMkX05UZB3i&s',
			},
			{
				text: 'Offer support to children both at home and at school',
				imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Parent-teacher_conference.jpg/1200px-Parent-teacher_conference.jpg',
			},
		],
	},
	{
		title: 'Creating Stronger Communities',
		activities: [
			{
				text: `Parental involvement in school
activities fosters a stronger
sense of community and
provides an opportunity for
parents to work with and get
to know one another.`,
				imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Parents_and_students_working_together.jpg/1200px-Parents_and_students_working_together.jpg',
			},
			{
				text: 'Provides an opportunity for parents to work with and get to know one another',
			},
		],
	},
	{
		title: 'Teaching of Life Skills \n to the Future Generation',
		activities: [
			{
				text: `Volunteering in school
activities allows parents to
lead by example and teaches
their children important life
skills like teamwork,
communication and problem-
solving skills.`,
				imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Parents_teaching_children.jpg/1200px-Parents_teaching_children.jpg',
			},
			{
				text: 'Teaches important life skills like teamwork, communication and problem-solving skills',
			},
		],
	},
];



const Home = () => {
	return (
		<ScrollView>
			<Box
				display="flex"
				flexDirection="column"
				alignTypographys="flex-start" /* Align the content to the left */
				justifyContent="center"
				padding={20}
				bgcolor="#080C25"
				sx={{ '& h1': { fontWeight: 700, color: '#ffffff', textAlign: 'left' } }} /* Apply common styles for h1 */
			>
				<Typography variant="h1" mt={1}>
					Get Involved: Parental
				</Typography>
				<Typography variant="h1">Involvement in Schools</Typography>
				<Box mt={2}>
					<Typography variant="h4" sx={{ fontWeight: 400, color: '#ffffff' }}>
						Parents are an essential part of any school community, and the benefits of their involvement are numerous.
						By participating in various school activities, parents can develop lasting relationships with their child's
						school, help support the education of their children, and contribute to building a stronger community.
					</Typography>
				</Box>
				<Divider sx={{ color: 'gray', width: 5, marginTop: 2 }} />
				<Typography variant="h2" sx={{ fontWeight: 700, color: '#ffffff', textAlign: 'left', marginTop: 14 }}>
					Benefits of Parental Involvement in Schools
				</Typography>
				<Box display="flex" justifyContent="center" alignTypographys={"center"} mt={4}>
					{/* 2x2 matrix of boxes */}
					<Box bgcolor="#4070FF" color="#ffffff" padding={2} marginRight={4} width="40vw" height="33.33vh" >
						<Typography variant="h3">
							Improved Academic Performance
						</Typography>
						<Typography variant='h5' mt={2}>
							Studies have shown that when parents
							are involved in their child's education,
							academic performance, attendance, and
							motivation all improve.
						</Typography>
					</Box>
					<Box bgcolor="#4070FF" color="#ffffff" padding={2} width="40vw" height="33.33vh">
						<Typography variant="h3">
							Stronger School and Community
							Connections
						</Typography>
						<Typography variant='h5' mt={2}>
							Being involved in school activities can help
							parents build stronger connections to the
							school and the community, which can
							ultimately benefit everyone involved.
						</Typography>
					</Box>
				</Box>
				<Box display="flex" justifyContent="center" mt={4}>
					<Box bgcolor="#4070FF" color="#ffffff" padding={2} marginRight={4} width="40vw" height="33.33vh">
						<Typography variant="h3">
							Positive Role Modeling
						</Typography>
						<Typography variant='h5' mt={2}>
							By volunteering in school activities,
							parents can actively model positive
							behaviours and help their children develop
							a strong work ethic and sense of
							community responsibility.
						</Typography>					</Box>
					<Box bgcolor="#4070FF" color="#ffffff" padding={2} width="40vw" height="33.33vh">
						<Typography variant="h3">
							Increased Self-Eteem
						</Typography>
						<Typography variant='h5' mt={2}>
							When parents get involved, their children
							feel more supported and valued - leading
							to a greater sense of self-esteem and
							well-being.
						</Typography>
					</Box>
				</Box>
				{/* -----------------------THIRD SLIDE WITH LISTING OF ACTIVITES--------------------------------------- */}
				<Typography variant='h1' mt={15}> Types of School Activities Parents can Participate in</Typography>
				<Grid container spacing={2}>
					{activitiesList.map((val, index) => (
						<Grid item xs={4}>
							<Typography variant='h3' color={"white"} mt={1} mb={2}>{val.title}</Typography>
							<List>
								{
									val.activities.map((text, index) => (
										<ListItem key={index}>
											{
												index != 0 && (
													<Typography variant='h4' color={"white"} ml={1}>{text}</Typography>
												)
											}
										</ListItem>
									))
								}
							</List>
						</Grid>
					))}
				</Grid>
				{/* -------------------------------------------------------------------------------------------- */}
				{/* -----------------------FOURTH SLIDE WITH LISTING OF ACTIVITES--------------------------------------- */}
				<Typography variant='h1' mt={15}> Why Volunteering in School Activities is Important</Typography>
				<Grid container spacing={2}>
					{benefitsList.map((val, index) => (
						<Grid item xs={4}>
							<img src={"https://picsum.photos/200"} width={300} height={200} style={{ marginTop: 20 }} />
							<Typography variant='h3' color={"white"} mt={2} mb={2}>{val.title}</Typography>
							<List>
								{val.activities.map((text, index) => (
									<ListItem key={index}>
										<Typography variant='h4' color={"white"} >
											{text.text}
										</Typography>
										{console.log(text.imagePath)}
									</ListItem>
								))}
							</List>
						</Grid>
					))}
				</Grid>
				{/* -------------------------------------------------------------------------------------------- */}
				{/* -----------------------FIFTH SLIDE WITH SIGN UP INSTRUCTIONS--------------------------------------- */}
				<Typography variant='h1' mt={15}> How to Sign Up for School Activities</Typography>
				<Grid container spacing={2} mt={2}>
					<Grid item xs={5}>
						<img src={"https://picsum.photos/200/800"} width={'100%'} height={800} style={{ marginTop: 20 }} />
					</Grid>
					<Grid item xs={7}>
						<Typography variant='h3' color={'white'}> Signing up for school activities is easy! Simply click here to find out
							how. You can also speak with your child's teacher to learn about
							upcoming events or volunteer opportunities.</Typography>
						<Grid container xs={3.5}>
							{/* <Typography variant='h3' color={'white'}>Apply for the area you
								want to contribute in
								we provide parents with
								an online portal where
								they can sign up for
								school activities, review
								the calendar or even
								schedule time to meet
								with teachers or school
								administrators.</Typography> */}
						</Grid>
					</Grid>
				</Grid>
				{/* -------------------------------------------------------------------------------------------- */}

			</Box>
		</ScrollView>
	);
};

export default Home;
