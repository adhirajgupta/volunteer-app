import React from 'react';
import { Box, Divider, Grid, List, ListItem, Typography, } from '@mui/material';
import { ScrollView, View, Image } from 'react-native';
import { activitiesList,benefitsList } from '../data/LandingPageText';
import image1 from '../assets/logo512.png'




const LandingPage = () => {
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
							<img src={image1} width={300} height={200} style={{ marginTop: 20 }} />
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
						<img src={image1} width={'100%'} height={800} style={{ marginTop: 20 }} />
					</Grid>
					<Grid item xs={7}>
						<Typography variant='h3' color={'white'}> Signing up for school activities is easy! Simply click here to find out
							how. You can also speak with your child's teacher to learn about
							upcoming events or volunteer opportunities.</Typography>
						<Grid container>
							<Grid item xs={6} spacing={12}>
								<Typography variant='h5' color={'white'} mt={5}>Apply for the area you
									want to contribute in
									we provide parents with
									an online portal where
									they can sign up for
									school activities, review
									the calendar or even
									schedule time to meet
									with teachers or school
									administrators.</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant='h5' color={'white'} mt={5} ml={2}>Apply for the area you
									want to contribute in
									we provide parents with
									an online portal where
									they can sign up for
									school activities, review
									the calendar or even
									schedule time to meet
									with teachers or school
									administrators.</Typography>
							</Grid>
							<Typography variant="h5" color={'white'} mt={10}>
								Joining the parent-teacher association is a great way to be
								involved with school activities and learn about upcoming
								volunteer opportunities
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				{/* -------------------------------------------------------------------------------------------- */}
				{/* -----------------------SIXTH SLIDE WITH SIGN UP INSTRUCTIONS--------------------------------------- */}
				<Typography variant='h2' color={"white"} mt={15} ml={5}>
					Join Us Today!
				</Typography>
				<Box display="flex" justifyContent="center" mt={4} ml={5}>
					<Box bgcolor="#2a4875" color="#ffffff" padding={2} marginRight={4} width="40vw" height="33.33vh">
						<Typography variant="h3">
							Get Involved
						</Typography>
						<Typography variant='h5' mt={2}>
							Sign up to volunteer and participate in
							school activities today! Check the school
							website or contact the school office to
							find out more about upcoming events,
							meetings, and opportunities to get
							involved.
						</Typography>
					</Box>
					<Box bgcolor="#2a4875" color="#ffffff" padding={2} width="40vw" height="33.33vh">
						<Typography variant="h3">
							Make a Difference
						</Typography>
						<Typography variant='h5' mt={2}>
							Being involved in school activities gives
							you the opportunity to make a positive
							impact on the education and well-being of
							your child and the wider school
							community. Join today and make a
							difference!
						</Typography>
					</Box>
				</Box>
			</Box>
		</ScrollView>
	);
};

export default LandingPage;
