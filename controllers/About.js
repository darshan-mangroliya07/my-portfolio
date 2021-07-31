module.exports = (req, res, next) => {
    res.render('about', { title: 'About', home: false, project: false, about: true, contact: false });
}