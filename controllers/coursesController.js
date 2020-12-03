var info = {
    title: 'Digital House',
    courses: ['Full Stack', 'Mobile Android', 'Marketing Digital']
}

const coursesController = {
    index: (req, res) => {
        res.render('courses', info);
    }
}

module.exports = coursesController;