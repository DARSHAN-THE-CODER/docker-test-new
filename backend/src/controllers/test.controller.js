

const testApi = async (req, res) => {
    try {
        console.log("logged from backend !")
        res.status(200).send("You got this message  from backend !")
    } catch (err) {
        res.status(500).send("some error occured")
    }   
}

module.exports = testApi