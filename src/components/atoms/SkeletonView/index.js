import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SectionContainer, Card, CardBody, HttpCurrentConnectionItem } from '../../../components'

const SkeletonView = () => {
	return (
		<div className="content_flex_box">
			<div>
				<div className="route_section" >
					<h4 className="route_name"><Skeleton width={200} /></h4>
					<SectionContainer>
						<Skeleton style={{ marginBottom: '20px' }} height={200} count={2} borderRadius={15} />
					</SectionContainer>
				</div>
			</div>

			<div>
				<SectionContainer>
					<Skeleton style={{ marginBottom: '20px' }} height={50} count={7} borderRadius={15} />
				</SectionContainer>
			</div>
		</div>
	)
}

export default SkeletonView