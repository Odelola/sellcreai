import styles from './SampleOM.module.css'
import RetailOMImage from "../assets/images/SampleOMImages/RetailOMImage.png"
import MultiFamilyOMImage from "../assets/images/SampleOMImages/MultiFamilyOMImage.png"
import OfficeOMImage from "../assets/images/SampleOMImages/OfficeOMImage.png"

const SampleOM = () => {
    const sampleOMsList = [
        {
            image: RetailOMImage,
            title: "Retail OM",
            description: "strip centers, street retail, vehicle related, and more."
        },
        {
            image: MultiFamilyOMImage,
            title: "Multi-Family OM",
            description: "garden, low-rise, mid-rise, high-rise."
        },
        {
            image: OfficeOMImage,
            title: "Office OM",
            description: "all classes of office buildings, loft/creative, medical."
        },
    ]
    return (
        <section className={styles.sampleOMSectionContainer} id="sampleom">
            <div className={[`${styles.sampleOMSectionContainerInner} container`]}>

                <article>
                    <div>
                        <h1>Sample OMs created with our platform</h1>
                    </div>
                </article>
                <article className={styles.sampleOMContainer}>
                    {sampleOMsList.map((item, index) => (
                        <div className={styles.sampleOMCard} key={index}>
                            <div className={styles.sampleOMCardInner}>
                                <img src={item.image.src} alt={`${item.title} Image`} />
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                            <button className='btn btn-primary'>View Sample Template</button>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
};

export default SampleOM;  